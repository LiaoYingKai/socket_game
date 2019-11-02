import loadComponent from './loadable';

const Lobby = loadComponent({ loader: () => import('../Pages/lobby') });
const TicTacToc = loadComponent({ loader: () => import('../Pages/tic-tac-toc') });

const PathEnums = {
	LOBBY: '/',
	TIC_TAC_TOC: '/tic-tac-toc',
};

const {
	LOBBY,
	TIC_TAC_TOC
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
	}
];

export {
	PathEnums
};