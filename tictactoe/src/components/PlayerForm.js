export default function PlayerForm( { started, initGame, players, addPlayer} ) {
    // Brukes til å sjekke at det er fylt inn data i begge inputs
    // Knappen er ikke aktivert før det
    const isDisabled = () => !players.playerOne || !players.playerTwo

}