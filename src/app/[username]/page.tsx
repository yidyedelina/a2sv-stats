import LeetCode from "leetcode-query";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';
const Post = async ({
    params,
}: {
    params: { username: string };
}) => {
    let leetcode = new LeetCode();
    let user = await leetcode.user(params.username);
    let acceptedFilter = user.recentSubmissionList?.filter((item) => item.statusDisplay == "Accepted");
    let today = (item: any) => {
        let date = new Date();
        let subM = new Date(item * 1000);
        if (date.getMonth() != subM.getMonth()) return false;
        else if (date.getDay() != subM.getDay()) return false;
        return true;
    }
    // June 12, 2017
    var d2 = new Date();
    let todaySubmissions = acceptedFilter?.filter(item => today(item.timestamp));
    let removeRepeated = todaySubmissions?.map(sub => sub.title);
    let finalSub = new Set(removeRepeated);
    let finalArr = Array.from(finalSub);

    console.log(todaySubmissions?.length);

    return (
        <main >
            <h1>hello world</h1>
            <Suspense fallback={`hello world`}>
                <div>
                    <p>Today I solved { finalArr.length} from leetcode</p>
                    {finalArr?.map((sub, index) => {
                        return (
                            <p key={index} className="">
                                {index + 1}. <span>{sub} time complexity O(1) and space complexity O(1)</span>
                            </p>
                        )
                    })}
                </div>
            </Suspense>

        </main>
    )
}

export default Post
