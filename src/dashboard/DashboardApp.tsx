import { Provider } from "react-redux";
import { store } from "../shared/store";
import { Dashboard } from "./components/Dashboard";

export const DashboardApp = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};
