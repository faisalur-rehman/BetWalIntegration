import { useHistory } from "react-router-dom";

const HistoryPush = ({ url }) => {
  const history = useHistory();
  return history.push(`${url}`);
};
export default HistoryPush;
