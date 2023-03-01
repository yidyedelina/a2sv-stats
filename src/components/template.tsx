import { LeetCodeGraphQLResponse } from "leetcode-query";

export default function Template({data}:{data: any}) {
    return (
        <div>
            <p>today's update</p>
            {data.map((item, index) => (
                <p key={index}>
                    ${index + 1} <span>${item} time complexity O(1) and space complexity O(1)</span>
                </p>
            ))}
        </div>
    )
}