import { killTime } from "@/app/lib/data";

export default async function Page(){
    const x = await killTime()
    return (
    <p>CUstomers page</p>
    )
}