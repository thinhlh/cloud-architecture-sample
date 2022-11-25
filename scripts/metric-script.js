import { check } from "k6";
import http from "k6/http";

export default function () {
  var url =
    __ENV.OPTIMIZED === "true"
      ? "http://host.docker.internal:80"
      : "http://host.docker.internal:3000";

  url = "http://host.docker.internal:3000";

  console.log(url);
  let res = http.get(url, { timeout: 60000 }); // 30s
  check(
    res,
    {
      "is response success": (r) => r.status === 200,
    },
    { my_tag: res.body }
  );
}
