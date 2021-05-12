import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2.5rem 2rem;
  background: linear-gradient(45deg, var(--blue-twitter), var(--blue), var(--red));
  position: relative;

  display: flex;
  flex-direction: column;

  main {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 40rem;
    width: 90%;
    padding: 1rem 2rem;

    text-align: center;
    background: transparent;
    color: var(--title);

    z-index: 1;

    &::before {
      background: linear-gradient(45deg, var(--gray-line), var(--white), var(--background));
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      backdrop-filter: blur(50px);
      opacity: 0.5;
      border-radius: 5px;
    }

    h2 {
      font-size: 2rem;
    }

    .input {
      input {
        padding: 0.5rem 1rem;
        margin: 2rem 0 0.5rem 0;
        text-align: center;
      }

      button {
        background: var(--title);
        width: 10rem;
        margin: 0 auto 2rem auto;
        font-size: 0;
        border: none;
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white);

        transition: all ease-in-out 0.4s;

        &:hover {
          background: var(--blue);
        }
      }
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
