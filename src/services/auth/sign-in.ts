import { fetcher } from "@/utils";
import { json } from "stream/consumers";
import { ApiContext, User } from "@/types";

export type SignInParams = {
  userName: string;
  password: string;
};

const signIn = async (
  context: ApiContext,
  params: SignInParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/sign-in`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
};

export default signIn;
