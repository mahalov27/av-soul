import { useState, useEffect } from "react";

const useImgLoadConrtol = (list = []) => {
  const [qtyImgLoaded, setQtyImgLoaded] = useState(0);
  const [isAllImgLoaded, setIsAllImgLoaded] = useState(false);

  useEffect(() => {
    if (!list) return;

    const listLength = list.length

    const checkIfAllImagesLoaded = async () => {
      if (listLength === qtyImgLoaded && !isAllImgLoaded) {
        await setIsAllImgLoaded(true);
      }
    };

    checkIfAllImagesLoaded();
  }, [list, qtyImgLoaded, isAllImgLoaded]);

  const isLoadedImg = () => {
    setQtyImgLoaded((prevState) => prevState + 1);
  };

  return { setIsAllImgLoaded, isLoadedImg, isAllImgLoaded };
};

export default useImgLoadConrtol;
