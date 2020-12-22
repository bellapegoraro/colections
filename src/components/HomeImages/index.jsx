import ImageRM from "./imagens/637645.jpg";
import ImageP from "./imagens/fun-pokemon-backgrounds-full-hd-download-high-definiton-wallpapers-amazing-colourful-4k-download-wallpapers-best-artwork-1439x878-1.jpg";
import { motion } from "framer-motion";
import { Container, ImagesMobile, ImagesDesktop } from "./style";

const HomeImages = () => {
  return (
    <Container>
      <ImagesMobile>
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
          <img alt="rickandmorty" src={ImageRM} />
        </motion.div>
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
          <img alt="pokemons" src={ImageP} />
        </motion.div>
      </ImagesMobile>
      <ImagesDesktop>
        <motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
          <img alt="rickandmorty" src={ImageRM} />
        </motion.div>
        <motion.div animate={{ x: -100 }} transition={{ duration: 1 }}>
          <img alt="pokemons" src={ImageP} />
        </motion.div>
      </ImagesDesktop>
    </Container>
  );
};

export default HomeImages;
