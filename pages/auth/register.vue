<template>
  <h3 class="flex justify-center pt-32 text-3xl font-extrabold">Register Form</h3>
  <div  class="flex justify-center">
    <a-form class="mt-3" :model="formState" name="normal_login" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item label="Confirm" name="cfpassword" :rules="[{ required: true, message: 'Please input your password!' }]">
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button w-36">
        Create account
      </a-button>
      Already have an account?
      <a href="/auth/register" class="text-sky-700 text-lg">Login</a>
    </a-form-item>
  </a-form>
  </div>


</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})

import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
