import loadComponent from './loadable';

const Lobby = loadComponent({ loader: () => import('../Pages/lobby') });
const TicTacToc = loadComponent({ loader: () => import('../Pages/tic-tac-toc') });
const Gomoku = loadComponent({ loader: () => import('../Pages/gomoku') });

const PathEnums = {
	LOBBY: '/',
	TIC_TAC_TOC: '/tic-tac-toc',
	GOMOKU: '/gomoku',
};

const {
	LOBBY,
	TIC_TAC_TOC,
	GOMOKU
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
];

export {
	PathEnums
};