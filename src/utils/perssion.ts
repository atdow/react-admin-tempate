/*
 * @Author: atdow
 * @Date: 2021-06-03 17:01:31
 * @LastEditors: null
 * @LastEditTime: 2021-06-03 17:03:32
 * @Description: file description
 */
// 菜单数据格式化
export function menuDataToTreeData(menu = []) {
    let arr = JSON.parse(JSON.stringify(menu));
    if (menu.length === 0) {
        return [];
    }
    arr.forEach(arrItem1 => {
        arr.forEach(arrItem2 => {
            if (arrItem1.parentId === arrItem2.id) {
                if (!!arrItem2.children) {
                    arrItem2.children.push(arrItem1);
                } else {
                    arrItem2.children = [arrItem1];
                }
            }
        });
    });
    let formatData = arr.filter(item => {
        return item.parentId === 0;
    });
    // console.log('formatData:', formatData);
    // console.log('menu:', menu);
    return formatData;
}
