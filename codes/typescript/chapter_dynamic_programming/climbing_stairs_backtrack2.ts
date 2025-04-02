
function climbingWays(max: number, choices: number[] = [1, 2]) {

    /* 判断当前状态是否为解 */
    function isSolution(state: number[]): boolean {
        return state[state.length - 1] === max
    }

    /* 记录解 */
    function recordSolution(state: number[], res: number[][]): void {
        res.push([...state]);
    }

    /* 判断在当前状态下，该选择是否合法 */
    function isValid(state: number[], choice: number): boolean {
        return ((state[state.length - 1] ?? 0) + choice) <= max;
    }

    /* 更新状态 */
    function makeChoice(state: number[], choice: number): void {
        state.push((state[state.length - 1] ?? 0) + choice);
    }

    /* 恢复状态 */
    function undoChoice(state: number[]): void {
        state.pop();
    }




    /* 回溯算法：爬楼梯*/
    function backtrack(
        //自定义状态，当前例子是tree的路径
        state: number[],
        res: number[][]
    ): void {
        // 检查是否为解
        if (isSolution(state)) {
            // 记录解
            recordSolution(state, res);
        }
        // 遍历所有选择
        for (const choice of choices) {
            // 剪枝：检查选择是否合法
            if (isValid(state, choice)) {
                // 尝试：做出选择，更新状态
                makeChoice(state, choice);
                // 进行下一轮选择
                backtrack(state, res);
                // 回退：撤销选择，恢复到之前的状态
                undoChoice(state);
            }
        }
    }


    let res: number[]
    backtrack([0], res = [])

    return res
}
const n = 9;
const res = climbingWays(n).length;
console.log(`爬 ${n} 阶楼梯共有 ${res} 种方案`);



