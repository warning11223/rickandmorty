import styled from "styled-components";
import { bounce } from "../theme/animations";

type Props = {
    message: string;
}

export default function ErrorMessage({ message }: Props) {
    return (
        <DivError>
            <p>Oh Morty!</p>
            <h1>{message}</h1>
        </DivError>
    );
}

const DivError = styled.div`
   width: 100%;
   text-align: center;
   padding-block: 4rem;

   h1 {
      margin-top: 4rem;
      animation: ${bounce} ease 2s infinite;
   }
`;