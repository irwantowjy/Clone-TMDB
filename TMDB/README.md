-bug di chipny
- <Blur/> msih ikut semua 
- masih gak paham code ini

const handleBlur = (id) => {
  setClickedImages((prevClickedImages) => ({
    ...prevClickedImages,
    [id]: !prevClickedImages[id], 
  }));
};
