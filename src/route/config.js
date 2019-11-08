import loadComponent from './loadable';

const Lobby = loadComponent({ loader: () => import('../Pages/lobby') });
const TicTacToc = loadComponent({ loader: () => import('../Pages/tic-tac-toc') });
const Gomoku = loadComponent({ loader: () => import('../Pages/gomoku') });
const PokerBoast = loadComponent({ loader: () => import('../Pages/poker-boast') });

const PathEnums = {
	LOBBY: '/',
	TIC_TAC_TOC: '/tic-tac-toc',
	GOMOKU: '/gomoku',
	POKER_BOAST: '/poker-boast',
};

const {
	LOBBY,
	TIC_TAC_TOC,
	GOMOKU,
	POKER_BOAST
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
];

export {
	PathEnums
};