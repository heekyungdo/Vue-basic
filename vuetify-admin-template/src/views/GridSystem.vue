<template>
  <!-- fluid는 화면 꽉 차게 -->
  <v-container fluid>
    <!-- 예제1 -->
    <v-card class="pa-3">
      <!-- v-row>v-col>컨텐츠 -->
      <!-- no-gutters는 card사이 공백 없게 -->
      <!-- dense는 card 사이 공백 좁게 -->
      <!-- It uses a standard gutter of 24px -->
      <v-row no-gutters>
        <v-col>
          <v-card class="pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3 outlined">
            col
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="pa-3 outlined">
            col
          </v-card>
        </v-col>

        <v-col>
          <v-card class="pa-3 outlined">
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3 outlined">
            col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- 예제2 -->
    <v-card class="mt-5 pa-3">
      <!-- align은 수직 정렬, v-row의 속성 -->
      <v-row :style="{ height: '120px' }" class="red" align="start">
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
      </v-row>
      <v-row :style="{ height: '120px' }" class="yellow" align="start">
        <!-- align-self는 해당 col만 적용, v-col의 속성 -->
        <!-- cols="auto" 해당 콘텐츠만큼 영역차지 -->
        <v-col align-self="end" cols="auto">
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>

        <v-col align-self="center">
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-3" outlined>
            col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <!-- 예제3 -->
    <v-card class="mt-5 pa-3">
      <!-- justify는 v-row의 속성. 수평 정렬 -->
      <!-- start, center, end, space-around, space-between -->
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-card>Col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card>Col</v-card>
        </v-col>
        <v-col cols="auto">
          <v-card>Col</v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
