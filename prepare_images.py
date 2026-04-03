import os
import shutil
import re

SRC_DIR = r"D:\minadesign\github\antigravity\SERKAN\my-product-api\downloaded-images"
DEST_DIR = r"d:\minadesign\elements\365\images\products"

os.makedirs(DEST_DIR, exist_ok=True)

# Pattern to detect images WITH dimensions (e.g., -235x300.avif)
# We want to SKIP these and take the ones without dimensions if they exist,
# or just take one version per base name.
dim_pattern = re.compile(r"-\d+x\d+")

all_files = os.listdir(SRC_DIR)
# Filter for .avif files
avif_files = [f for f in all_files if f.endswith(".avif")]

# Group by base name
main_images = []
for f in avif_files:
    if not dim_pattern.search(f) and "-scaled" not in f:
        main_images.append(f)

# If we don't have enough "clean" names, we'll take others
print(f"Found {len(main_images)} clean images.")

# To be safe, if we have less than 289, let's look for others but avoid duplicates
if len(main_images) < 289:
    bases_already_in = {re.sub(r"\.avif$", "", f) for f in main_images}
    for f in avif_files:
        base = re.sub(r"(?:-scaled)?(?:-\d+x\d+)?\.avif$", "", f)
        if base not in bases_already_in:
            main_images.append(f)
            bases_already_in.add(base)
        if len(main_images) >= 289:
            break

print(f"Selected {len(main_images)} images for the gallery.")

# Copy and rename to 0001.avif, 0002.avif... but wait, 
# better keep them as is and list them in a JSON or just rename 1..289
for i, f in enumerate(main_images):
    src_path = os.path.join(SRC_DIR, f)
    # Target name 1 to N
    dest_name = f"{i+1:04d}.avif"
    dest_path = os.path.join(DEST_DIR, dest_name)
    shutil.copy2(src_path, dest_path)

print("Copy complete.")
