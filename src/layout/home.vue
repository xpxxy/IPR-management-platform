<template>
    <a-layout id="components-layout-demo-top-side">
      <a-layout-header class="header">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 0px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-sider width="200" style="background: #fff">
            <a-menu
              mode="inline"
              :default-selected-keys="['1']"
              :default-open-keys="['sub1']"
              style="height: 100%"
            >
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="user" />知识产权登记</span>
                <a-menu-item key="1">
                  申请登记
                </a-menu-item>
                <a-menu-item key="2">
                  查询登记进度
                </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="laptop" />知识产权使用</span>
                <a-menu-item key="5">
                  变更知识产权
                </a-menu-item>
                <a-menu-item key="6">
                  查询知识产权
                </a-menu-item>
                
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="notification" />知识产权换让</span>
                <a-menu-item key="9">
                  申请转让
                </a-menu-item>
                
              </a-sub-menu>
              <a-sub-menu key="sub4">
                <span slot="title"><a-icon type="notification" />知识产权追踪</span>
                <a-menu-item key="9">
                  知产产权追踪
                </a-menu-item>
                
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </template>
  
  <style>
  #components-layout-demo-top-side .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
  .header{
    padding-left: 0px;
    width:100%;
  }
  </style>
  