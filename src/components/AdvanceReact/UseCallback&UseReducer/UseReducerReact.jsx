import { useReducer, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const initialState = { player: "", isPlaying: "", computer: "", winners: "" };
const data = ["gunting", "batu", "kertas"];

const FromContainer = styled.form`
  max-width: 600px;
  margin: 2.1rem auto;
  padding: 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  font-weight: 200px;
  margin-bottom: 0.5rem;
  color: black;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  border: 2px solid #e1e1e1;

  &:focus {
    box-shadow: 0 0 8px rgba(74, 144, 226, 0.2);
    background-color: transparent;
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #ccc;
  }
`;

const Error = styled.div`
  margin-top: 1rem;
  color: red;
  font-weight: 300px;
`;
const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.1s;

  &:hover:not(:disabled) {
    background-color: #357abd;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case "player":
      return { ...state, player: action.choice };
    case "comp":
      return { ...state, computer: action.choice };
    case "winner":
      return { ...state, winners: action.winner };
    default:
      return state;
  }
}

export default function ExampleReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const winner = (props) => {
    const { player, computer } = props;
    if (player == computer) {
      dispatch({
        type: "winner",
        winner: "Draw",
      });
      return;
    }
    if (player == "batu" && computer == "gunting") {
      dispatch({
        type: "winner",
        winner: "You Win",
      });
      return;
    }
    if (player == "kertas" && computer == "batu") {
      dispatch({
        type: "winner",
        winner: "You Win",
      });
      return;
    }
    if (player == "gunting" && computer == "kertas") {
      dispatch({
        type: "winner",
        winner: "You Win",
      });
      return;
    }

    dispatch({
      type: "winner",
      winner: "You Lose",
    });
    return;
  };

  const choiceComputer = useCallback(() => {
    return new Promise((resolve, reject) => {
      const now = new Date();
      const idInterval = setInterval(() => {
        let index = Math.floor(Math.random() * 3);
        if (new Date() - now > 2100) {
          dispatch({
            type: "comp",
            choice: data[index],
          });
          resolve(data[index]);
          clearInterval(idInterval);
        }
        dispatch({
          type: "comp",
          choice: data[index],
        });
      }, 50);
    });
  }, [state]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const choiceComp = await choiceComputer();
      winner({
        player: state.player,
        computer: choiceComp,
      });
    },
    [choiceComputer, state.computer],
  );
  return (
    <div className="example-reducer">
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Usage UseReducer :
      </h2>
      <FromContainer onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Permainan Suit Jawa
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "black",
            marginBottom: "1.rem",
          }}
        >
          Kamu akan memilih Gunting, Kertas, Batu
        </p>
        <FormGroup>
          <div>
            <Label>Masukan pilihanmu :</Label>
            <Input
              onChange={(e) =>
                dispatch({
                  type: "player",
                  choice: e.target.value,
                })
              }
              placeholder="pilih gunting,batu,atau kertas..."
            ></Input>
          </div>
          <div>
            <p>VS</p>
          </div>
          <div>
            <Label>Pilihan komputer :</Label>
            <Input value={state.computer} disabled={true}></Input>
          </div>
        </FormGroup>
        <p>{state.winners}</p>
        <SubmitButton type="submit">Submit</SubmitButton>
      </FromContainer>
    </div>
  );
}
