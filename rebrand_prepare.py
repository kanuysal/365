import os
import json

SRC_DIR = r"D:\minadesign\github\antigravity\SERKAN\my-product-api\downloaded-images"
JSON_PATH = r"D:\minadesign\github\antigravity\SERKAN\my-product-api\products.json"
DEST_DIR = r"d:\minadesign\elements\365\images\products"

# Load products to get names
with open(JSON_PATH, "r", encoding="utf-8") as f:
    products = json.load(f)

# Sort products by ID or other criteria if needed
# For now, let's just get the list of unique product names and covers
product_data = []
for p in products:
    name = p.get("productName", "Urun Ismi")
    cover = p.get("cover", "")
    if cover:
        # Check if we have a smaller version in the directory
        # Typical name: cover-430x573.avif or similar
        base_name = os.path.splitext(cover)[0]
        ext = os.path.splitext(cover)[1]
        
        # Look for 430x573 or similar
        versions = [f for f in os.listdir(SRC_DIR) if f.startswith(base_name)]
        best_version = cover # Fallback
        
        # Prefer around 400-700px width for the gallery
        for v in versions:
            if "-430x573" in v:
                best_version = v
                break
            elif "-scaled" in v:
                best_version = v
        
        product_data.append({"name": name, "file": best_version})

# Capping at 366 (Wait, 289 available)
print(f"Total products with covers: {len(product_data)}")

# Create image mapping and copy images
img_names_to_js = []
for i, p in enumerate(product_data[:289]): # Using 289
    src_path = os.path.join(SRC_DIR, p["file"])
    dest_name = f"{i+1:04d}.avif"
    dest_path = os.path.join(DEST_DIR, dest_name)
    try:
        import shutil
        shutil.copy2(src_path, dest_path)
        img_names_to_js.append(p["name"])
    except:
        img_names_to_js.append("Ürün")

# Output the product names as a JS variable for the bundle
with open(r"d:\minadesign\elements\365\assets\product_names.js", "w", encoding="utf-8") as f:
    f.write(f"export const productNames = {json.dumps(img_names_to_js, ensure_ascii=False)};")

print("Copy and mapping complete.")
