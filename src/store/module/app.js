export default {
    state: {
        breadCrumbList: [],
        errorList: [],
        isPhone: false,
    },
    getters: {
        errorCount: state => state.errorList.length
    },
    mutations: {
        setBreadCrumb (state, route) {
            state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
        },
        isPhoneVisiting (state, payload) {
            state.isPhone = payload
        }
    },
    actions: {
        addErrorLog ({ commit, rootState }, info) {
            if (!window.location.href.includes('error_logger_page')) {
                commit('setHasReadErrorLoggerStatus', false)
            }
        }
    }
}
  