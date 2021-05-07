---
path: '/posting/programmers-skill-tree'
date: '2021-04-08'
title: '프로그래머스 - 스킬트리'
description: '선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.'
tags: ['JS', 'Algorithm']
---

[링크](https://programmers.co.kr/learn/courses/30/lessons/49993)

```javascript
function solution(skillBuild, userSkillTrees) {
    let count = 0

    for (let userSkill of userSkillTrees) {
        let lastIndex = null

        for (let skill of skillBuild) {
            let findIndex = userSkill.indexOf(skill)

            if ((lastIndex === -1) && (findIndex !== -1)) { break }
            if ((lastIndex !== -1) && (findIndex !== -1) && (lastIndex > findIndex)) { break }
            if (skillBuild[skillBuild.length -1] === skill) {
                count += 1
                break
            }
            lastIndex = findIndex
        }
    }

    return count
}
```



### 문제풀이 생각

1. 주어진 스킬트리를 순회하면서 주어진 스킬에 해당하는 인덱스를 저장한다.
2. 선행 스킬을 배우지 않은 스킬트리로 카운트를 쌓지 않는다.
   (저장된 이전 스킬 인덱스가 -1이고 현재 스킬 인덱스가 -1이 아닌 경우)
3. 선행 스킬이 나중에 배우게 되면 카운트를 쌓지 않는다.
   (저장된 이전 스킬 인덱스가 -1이 아니고 현재 스킬 인덱스가 -1이 아니면서 저장된 이전 스킬의 인덱스가 현재 스킬 인덱스보다 값이 클 경우)
4. 조건을 다 거치고 마지막 확인이 된 경우 카운트 하나 쌓는다.
5. 카운트를 반환한다.



### 다른 사람의 풀이 (**iRequestUResponse , milliwonaire , 박하영**)

```javascript
function solution(skill, skill_trees) {
    function isCorrect(n) {
        // const test = '[' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(v => !skill.includes(v)).join('') + ']*';
        let test = skill.split('');
        for (var i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }

    return skill_trees.filter(isCorrect).length;
}
```



### 알게된 점

1. 조건에 충족하지 못하는 것을 거르는 방식으로 생각했지만 조건을 충족하는 방식으로도 생각해볼 수 있구나
2. Array.prototype.includes 를 이용해보자
3. Array.prototype.shift 를 이용해보자