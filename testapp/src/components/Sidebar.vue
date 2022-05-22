<template>
    <div>
        sidebar
        <ul>
            <li>11111</li>
            <li>2222</li>
            <li>3333</li>
        </ul>

    </div>
</template>
<style lang="scss" scoped>
// scoped能保持局部作用域，不被父类覆盖 原理是给子组件加上唯一的属性
$width: 300px;
ul {
  li {
    background: red;
    width: $width;
  }
}
</style>
