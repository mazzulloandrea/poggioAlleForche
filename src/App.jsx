import {
	unstable_HistoryRouter as HistoryRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { Cover, Tradizione, Viti, Cantina, Vini, Page } from "./containers";
import { history, routes } from "./utils";

const App = () => (
	<HistoryRouter history={history}>
		<Routes>

			<Route path={routes.cover} exact element={<Cover />} />
			{/* <Route path={routes.tradizione} exact element={<Tradizione />} />
			<Route path={routes.viti} exact element={<Viti />} />
			<Route path={routes.cantina} exact element={<Cantina />} />
			<Route path={routes.vini} exact element={<Vini />} /> */}
			<Route path={routes.tradizione} exact element={<Page />} />
			<Route path={routes.viti} exact element={<Page />} />
			<Route path={routes.cantina} exact element={<Page />} />
			<Route path={routes.vini} exact element={<Page />} />
			<Route path="*" element={<Navigate replace to={routes.cover} />} />
		</Routes>
	</HistoryRouter>
);

export default App;
