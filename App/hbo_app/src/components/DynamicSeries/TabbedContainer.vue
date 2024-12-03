<template>
  <div class="tabbed-container">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
        @click="activeTab = tab.name"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="tab-content">
      <component
        :is="getActiveComponent()"
        v-bind="tabData[activeTab]" 
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    tabData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeTab: this.tabs[0]?.name || "",
    };
  },
  methods: {
    getActiveComponent() {
      const activeTab = this.tabs.find((tab) => tab.name === this.activeTab);
      return activeTab ? activeTab.component : null;
    },
  },
};
</script>

<style scoped>
.tabbed-container {
  margin-top: 20px;
}

.tabs {
  display: flex;
  align-items: center;
  margin-left: 60px;
  border-bottom: 1px solid rgb(221, 221, 221);
}

.tabs button {
  font-family: system-ui, sans-serif;
  font-size: 18px;
  color: rgb(221, 221, 221);
  margin-right: 40px;
  border: none;
  background: none;
  outline: none;
  padding: 10px 0;
  cursor: pointer;
  position: relative;
}

.tabs button.active {
  color: rgb(255, 255, 255); 
  font-weight: bold;
}

.tabs button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: white;
}

.tabs button:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: white;
}

.tabs button::after {
  content: ''; 
}

.tab-content {
  margin-top: 20px;
}

@media (max-width: 1200px) {
  .tabs {
    margin-left: 5%;
  }

  .tabs button {
    font-size: 16px;
    margin-right: 30px;
  }
}

@media (max-width: 768px) {
  .tabs {
    margin-left: 5%;
  }

  .tabs button {
    font-size: 14px;
    margin-right: 20px;
  }
}

@media (max-width: 480px) {
  .tabs button {
    font-size: 12px;
    margin-right: 10px;
  }
}
</style>
