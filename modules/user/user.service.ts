import User from "./user.model"

export const create = async (body: any) => {
    const user = {
        ...body
    }

    return await User.create(user)
}