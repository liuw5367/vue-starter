<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <RouterLink to="/">
        <a-button type="primary">
          Back Home
        </a-button>
      </RouterLink>
    </template>
  </a-result>
</template>
