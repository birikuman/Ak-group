import os
import pymupdf

images_dir = os.path.join(os.getcwd(), 'images')
catalogues = [
    ('diaries', 'Diaries Catalogue 2027-Spreads.pdf'),
    ('kooshty', 'Kooshty Catalogue 2026-2027-Spreads.pdf'),
    ('okiyo', 'OKIYO Catalogue 2026-2027_spreads.pdf')
]

for folder_name, pdf_name in catalogues:
    pdf_path = os.path.join(images_dir, pdf_name)
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
    
    doc = pymupdf.open(pdf_path)
    print(f"=== {pdf_name}: {len(doc)} pages ===")
    
    out_dir = os.path.join(images_dir, 'catalogues', folder_name)
    os.makedirs(out_dir, exist_ok=True)
    
    # Extract up to first 20 pages or spreads (or all if under 25)
    max_pages = min(len(doc), 20)
    for page_idx in range(max_pages):
        page = doc[page_idx]
        # render page to image at 150 DPI for fast sharp loading
        pix = page.get_pixmap(dpi=150)
        img_path = os.path.join(out_dir, f"page_{page_idx + 1}.jpg")
        pix.save(img_path)
        print(f"Saved {img_path} ({pix.width}x{pix.height})")
    
    doc.close()

print("Extraction complete!")
