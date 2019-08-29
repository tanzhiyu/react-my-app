/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 09:42:26
 * @LastEditTime: 2019-08-27 17:35:48
 * @LastEditors: Please set LastEditors
 */
import React, { useState } from 'react';
import { Tree } from 'antd'

const treeData = [
  {
    title: '0-0',
    key: 0,
  },
  {
    title: '0-1',
    key: 1,
    children: [
      { title: '0-1-0-0', key: 2 },
      { title: '0-1-0-1', key: 3 },
      { title: '0-1-0-2', key: 4 },
    ],
  },
  {
    title: '0-2',
    key: 5,
  },
];
const expandData = data => {
  return data.reduce((prev, next) => {
    prev.push(next);
    if (next.children) {
      prev.push(...expandData(next.children))
    }
    return prev;
  }, [])
}

const getNodeKeys = nodeList => {
  return nodeList.reduce((prev, next) => {
    let key = next.key;
    let childrenKeys = getNodeKeys(next.props.children);
    prev.push(key);
    childrenKeys.length && prev.push(...childrenKeys);
    return prev;
  }, [])
}

const findParentByKey = (key, treeData) => {
  let parent = treeData.find(node => {
    if(node.children) {
     return node.children.some(item => item.key === key)
    }
  });
  let i = 0;
  while(!parent && treeData[i].children && i < treeData.length) {
    parent = findParentByKey(key, treeData[i].children)
    i++
  }
  return parent;
}

const isContainChildren = (parent, children) => {
  if (!parent || !parent.children) {
    return false
  }
  return parent.children.every(node => children.some(item => item === node.key));
}

const TreeSelect = props => {
  
  const [checkedKeys, setCheckedKeys] = useState({
    checked: [],
    halfChecked: []
  });
  const expandedTree = expandData(treeData);

  const handleCheck = (list, e) => {
    console.log('===========');
    let isParentChecked, isParentHalfChecked;
    const isLeaf = !!e.node.isLeaf();
    console.log('isLeaf', isLeaf);
    console.log(e)
    const { checked } = e;
    const currentKey = e.node.props.eventKey;
    const parent = findParentByKey(currentKey, treeData);
    console.log('parent', parent);
    const nodeChildren = e.node.getNodeChildren();
    console.log('nodeChildren', nodeChildren);
    const isTheLastChild = isContainChildren(parent, [...checkedKeys.checked, currentKey]) && checkedKeys.halfChecked.includes(parent.key)
    const childrenList = getNodeKeys(nodeChildren);
    console.log('childrenList', childrenList);
    const checkedKeysNew = Object.assign({}, checkedKeys);
    if (parent) {
      isParentChecked = checkedKeys.checked.includes(parent.key);
      isParentHalfChecked = checkedKeys.halfChecked.includes(parent.key);
    }
    if (checked) {
      checkedKeysNew.checked.push(currentKey);
      if (isTheLastChild) {
        checkedKeysNew.checked.push(parent.key);
        checkedKeysNew.halfChecked = checkedKeysNew.halfChecked.filter(node => node !== currentKey);
        checkedKeysNew.halfChecked = checkedKeysNew.halfChecked.filter(node => node !== parent.key);
      };
      !isLeaf && checkedKeysNew.checked.push(...childrenList);
      setCheckedKeys(checkedKeysNew)
    } else {
      checkedKeysNew.checked = checkedKeysNew.checked.filter(node => node !== currentKey);
      checkedKeysNew.halfChecked = checkedKeysNew.halfChecked.filter(node => node !== currentKey);
      if (parent && isParentChecked) {
        checkedKeysNew.checked = checkedKeysNew.checked.filter(node => node !== parent.key)
        !checkedKeysNew.halfChecked.includes(parent.key) && checkedKeysNew.halfChecked.push(parent.key);
      }
      if (!isLeaf) {
       checkedKeysNew.checked = checkedKeysNew.checked.filter(node => !childrenList.includes(node));
      }
      setCheckedKeys(checkedKeysNew);
    }
  }


  return (
    <Tree
      checkable
      defaultExpandAll
      checkStrictly
      treeData={treeData}
      checkedKeys={checkedKeys}
      onCheck={handleCheck}
    />
  )
}

export default TreeSelect