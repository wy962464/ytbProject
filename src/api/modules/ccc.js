import http from "@/api/http";

export function getEnterpriseInfo(data) {
    return http.get("/getCompanlists", data, {
        isLoading: true
    });
}

export function getEnterpriseInfo1(data) {
    return http.get("/getCompanlist1", data, {
        isLoading: false
    });
}