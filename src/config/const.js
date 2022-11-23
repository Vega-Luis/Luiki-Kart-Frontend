export const GRID_SIZE = 30; //speedway grid size
export const DIMENSIONS = 24; // speedway dimensions 25x25, but counting start in 0
export const PLAYER_SIZE = 28;
export const MAX_PLAYERS = 8;
export const MIN_PLAYERS = 2;
export const MIN_LAPS = 1;
export const MAX_LAPS = 6;

export const PLAYER_1 = {
    color: 'blue',
    x: 0,
    y: 0
}
export const PLAYER_2 = {
    color: 'red',
    x: 10,
    y: 10
}
export const speedways = ['Pista 1', 'Pista 2', 'Pista 3'];
export const gameTypes = ['Contra Jugadores', 'Contra Tiempo'];
export const games = [
        { code: 'A012', speedway: 'Pista 1', theme: 'Tema 1', players: '5/8' },
        { code: 'A123', speedway: 'Pista 1', theme: 'Tema 1', players: '5/8' },
        { code: 'A234', speedway: 'Pista 1', theme: 'Tema 1', players: '1/8' }
    ];

export const ranking = [
        { player: 'Juanito', time: '2.5 min', speedway: 'Pista 3', laps: '6', code: 'A012' },
        { player: 'Pepe', time: '4.5 min', speedway: 'Pista 2', laps: '4', code: 'A123' },
        { player: 'Lucas', time: '1.5 min', speedway: 'Pista 1', laps: '1', code: 'A234' }
    ];  