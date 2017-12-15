<template>
  <div>
      <el-col style="height-line:65px;heigth:65px;position:fixed;top:0px;left:0px;background:#fefefe;text-align:left;">
        <el-col :span="2">&nbsp;</el-col>
        <i class="iconfont icon-school3" style="font-size:38px;float:left;"></i>
        <el-col :span="4" style="color:#606060;padding-left:10px;">
          <el-row style="font-weight:bold;">Community</el-row>
          <el-row style="font-size:14px;">For students & Teacher</el-row>
        </el-col>
        <el-col :span="5" style="height:40px;line-height:40px;">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="7">
          <el-col :span="4">1</el-col>
          <el-col :span="4">2</el-col>
          <el-col :span="4">3</el-col>
          <el-col :span="4">4</el-col>
          <el-col :span="4">5</el-col>
          <el-col :span="4">6</el-col>
        </el-col>
        <el-col :span="2" style="">&nbsp;</el-col>
        <el-col :span="3" style="height:40px;padding:5px;">
          <el-col :span="12" style="border-right:1px solid;height:100%;">
          </el-col>
          <el-col :span="12"></el-col>
        </el-col>
      </el-col>
  </div>
</template>
<style>
.el-input__inner {
  height: 30px;
  border-radius: 20px;
}
</style>

