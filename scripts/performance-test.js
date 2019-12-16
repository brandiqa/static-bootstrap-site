import { check, sleep } from "k6";
import http from "k6/http";

export let options = {
    duration: "1m",
    vus: 10,
    thresholds: {
        http_req_duration: ["p(95)<500"]
    }
};

export default function () {
    var r = http.get("https://static-bootstrap-site.brandiqa.now.sh/");
    check(r, {
        "status is 200": (r) => r.status === 200
    });
    sleep(1);
}