import React from 'react'


// interface Props {
//     count: number;
//     setCounter: () => void;
//   }
//   const Clicker: React.FC<Props> = ({ count, setCounter }) => {

interface Props {
    who: String;
}

const Hello: React.FC <Props> = ({who}: Props) => (

    <h1>Hello {who}</h1>

)

export default Hello