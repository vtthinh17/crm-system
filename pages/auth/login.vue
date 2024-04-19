<template>
  <h3 class="flex justify-center pt-32 text-3xl font-extrabold">Login Form</h3>
  <div  class="flex justify-center">
    <a-form class="mt-3" :model="formState" name="normal_login" @finish="onFinish" @finishFailed="onFinishFailed">
    <a-form-item label="Email" name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
      <a-input v-model:value="formState.email">
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
    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button w-36">
        Log in
      </a-button>
      Dont have an account?
      <a href="/auth/register" class="text-sky-700 text-lg">Register now!</a>
    </a-form-item>
  </a-form>
  </div>


</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})

import { reactive, computed } from 'vue';
import axios from 'axios';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  email: string;
  password: string;
}
const formState = reactive<FormState>({
  email: '',
  password: '',
});
const onFinish = async (values: any) => {
  try {
      await axios.post("http://localhost:8000/api/login", { 
          email: values.email, 
          password: values.password
        }, { withCredentials: true })
        .then(response => {
          console.log("response: ",response)
          const tk = (response.data).slice(1,)
          localStorage.setItem('user_token', tk);
        })

        navigateTo('/')
        
    } catch (error) {
      console.log(error);
    }
  // console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.email && formState.password);
});
</script>
