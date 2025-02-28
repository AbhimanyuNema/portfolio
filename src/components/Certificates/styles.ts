import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .certificates-container {
    display: flex;
    flex-wrap: wrap; /* Allows wrapping for responsiveness */
    justify-content: center; /* Center items */
    gap: 2rem;
    padding: 1rem;
  }

  .certificate-card {
    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px; /* Set fixed width for alignment */
    height: auto;
    color: #FFF;

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
    }

    img {
      width: 100px; /* Adjust image size */
      height: auto;
      border-radius: 10px;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 960px) {
    .certificates-container {
      justify-content: center; /* Keep center alignment */
    }
  }

  @media (max-width: 740px) {
    .certificates-container {
      flex-direction: column;
      align-items: center;
    }

    .certificate-card {
      width: 80%; /* Adjust for smaller screens */
    }
  }
`;
