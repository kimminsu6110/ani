import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  gap: 10px;
  justify-items: center;
`;

const Circle = styled(motion.div)`
  background-color: green;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const overlay = {
  hidden: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  visible: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [click, setClick] = useState(false);
  const onClick = () => setClick((cur) => !cur);
  return (
    <Wrapper>
      <Grid>
        {['1', '2', '3', '4'].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n}>
            {n == '2' && click == false ? (
              <Circle layoutId='circle'></Circle>
            ) : null}
            {n == '3' && click == true ? (
              <Circle layoutId='circle'></Circle>
            ) : null}
          </Box>
        ))}
        <div>
          <button onClick={onClick}>Swtich</button>
        </div>
      </Grid>

      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Box layoutId={id} style={{ width: 200, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default App;
