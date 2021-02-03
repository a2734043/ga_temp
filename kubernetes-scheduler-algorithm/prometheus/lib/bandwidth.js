/**
 * Current Receive Bandwidth
 * @param {Pod namespace} namespace
 * @param {Pod name} pod
 * 單位：bytes
 */
const pod_current_receive_bandwidth = (namespace, pod) => {
    return (`
        sum(\
            irate(\
                container_network_receive_bytes_total{\
                    cluster="",\
                    namespace="${namespace}",\
                    pod="${pod}"\
                }[5m])) by (node, pod)
    `)
}
/**
 * Current Transmit Bandwidth(Bs)
 * @param {Pod namespace} namespace
 * @param {Pod name} pod
 * 單位：bytes
 */
const pod_current_transmit_bandwidth = (namespace, pod) => {
    return (`
        sum(\
            irate(
                container_network_transmit_bytes_total{cluster="",\
                    namespace="${namespace}",\
                    pod="${pod}"\
                }[5m])) by (node, pod)
    `)
}
/**
 * Node Current Transmit Bandwidth(Bs)
 * @param {Node ip} ip
 * 單位：bytes
 */
const node_current_receive_bandwidth = (ip) => {
    return (`
        instance:node_network_receive_bytes_excluding_lo:rate1m{\
                instance="${ip}:9100"\
            }
    `)
}

module.exports = {
    pod_current_receive_bandwidth,
    pod_current_transmit_bandwidth,
    node_current_receive_bandwidth
}