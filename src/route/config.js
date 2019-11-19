import loadComponent from './loadable';

const Lobby = loadComponent({ loader: () => import('../Pages/lobby') });
const TicTacToc = loadComponent({ loader: () => import('../Pages/tic-tac-toc') });
const Gomoku = loadComponent({ loader: () => import('../Pages/gomoku') });
const PokerBoast = loadComponent({ loader: () => import('../Pages/poker-boast') });
const PokerBoastGame = loadComponent({ loader: () => import('../Pages/poker-boast/game') });
const GameOf90s = loadComponent({ loader: () => import('../Pages/90s-game') });

const PathEnums = {
	LOBBY: '/',
	TIC_TAC_TOC: '/tic-tac-toc',
	GOMOKU: '/gomoku',
	POKER_BOAST: '/poker-boast',
	POKER_BOAST_GAME: '/poker-boast-game',
	GAME_OF_90S: '/90s-game'
};

const {
	LOBBY,
	TIC_TAC_TOC,
	GOMOKU,
	POKER_BOAST,
	POKER_BOAST_GAME,
	GAME_OF_90S
} = PathEnums;

export const config = [
	{
		path: LOBBY,
		component: Lobby,
		exact: true,
	},
	{
		path: TIC_TAC_TOC,
		component: TicTacToc,
		exact: true,
	},
	{
		path: GOMOKU,
		component: Gomoku,
		exact: true,
	},
	{
		path: POKER_BOAST,
		component: PokerBoast,
		exact: true,
	},
	{
		path: POKER_BOAST_GAME,
		component: PokerBoastGame,
		exact: true,
	},
	{
		path: GAME_OF_90S,
		component: GameOf90s,
		exact: true,
	},
];

export {
	PathEnums
};