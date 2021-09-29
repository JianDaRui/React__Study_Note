import { useContext } from "react";
import { UserContext, TokenContext } from "../App";

// 自定义context Hook
function useUserContext() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  return [user, token];
}

export default useUserContext;