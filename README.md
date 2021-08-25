# react-open-modal

react通用弹窗方法。同等能力的Vue弹窗方案：https://github.com/lq782655835/el-dialog-helper

## 背景

在做业务代码的modal弹窗时，总是围绕visible变量以及控制visible变量逻辑，能否简化弹窗相关逻辑呢？

博客：[弹窗解决方案](https://lq782655835.github.io/blogs/project/vue-dialog-solution.html)

## Install

```
npm install react-open-modal -S
```

## Usage

``` jsx
import ReactOpenModal from 'react-open-modal';
import s from './index.less';

function ModalTest({ onClose }) {
  return <div onClick={() => {
    console.log('close')
    onClose?.()
  }}>this is test dialog</div>
}

export default function IndexPage() {
  const handleClick = () => {
    ReactOpenModal(<ModalTest />)
  }
  return (
    <div>
      <h1 className={s.title} onClick={handleClick}>Page index</h1>
    </div>
  );
}
```

##  License
MIT