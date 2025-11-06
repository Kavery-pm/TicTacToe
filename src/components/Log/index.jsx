export default function Log({ turns }) {


    return <ol id="log">
        {turns.map((turn, index) =>
            <li key={index}>Player selected ({turn.square.row}, {turn.square.col})  </li>
        )}
    </ol>
}