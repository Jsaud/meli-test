import styled from "styled-components";

const Wrapper = styled.div`
  .containerFooter {
  background-color: #003049;
  color: #fff;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  bottom: 0;
  width: 100%;
}

.linkContact {
  align-items: center;
  border: none;
  color: #fff;
  display: flex;
  font-size: 1.2rem;
  padding: 0.4rem;
  position: relative;
  text-decoration: none;
  transition: 0.5s ease;
}

@media (min-width: 768px) {
  .containerFooter {
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  }

  .copyRight {
    order: 2;
  }
}

@media (min-width: 992px) {
  .containerFooter {
    padding: 3rem 0;
  }
}

 
`;

export default Wrapper;
