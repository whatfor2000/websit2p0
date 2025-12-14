"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Activity,
    Server,
    Zap,
    ShieldCheck,
    Play,
    Square,
    Cpu,
    Wifi,
    Fan,
    Lightbulb,
    Video,
    Thermometer,
    Palette
} from "lucide-react"

import { CreativeGallery } from "@/components/showcase/creative-gallery"

export default function ShowcasePage() {
    // --- CLOUD DASHBOARD STATE ---
    const [activeUsers, setActiveUsers] = useState(1243)
    const [cpuLoad, setCpuLoad] = useState(42)
    const [memoryUsage, setMemoryUsage] = useState(65)
    const [requestsPerSec, setRequestsPerSec] = useState(850)

    const [instances, setInstances] = useState([
        { id: "srv-01", name: "Web Fe-01", status: "running", region: "us-east-1", ip: "10.0.0.12" },
        { id: "srv-02", name: "Web Fe-02", status: "running", region: "us-east-1", ip: "10.0.0.13" },
        { id: "srv-db", name: "DB Master", status: "running", region: "us-east-1", ip: "10.0.1.50" },
        { id: "srv-cache", name: "Redis Cache", status: "stopped", region: "us-east-1", ip: "10.0.2.10" },
    ])

    const [isSimulationRunning, setIsSimulationRunning] = useState(true)
    const [isDeploying, setIsDeploying] = useState(false)
    const [deploymentProgress, setDeploymentProgress] = useState(0)

    // --- IOT DASHBOARD STATE ---
    const [iotDevices] = useState([
        { id: "iot-01", name: "Arduino Uno", type: "Controller", status: "online", location: "Living Room", battery: 100 },
        { id: "iot-02", name: "Raspberry Pi 4", type: "Gateway", status: "online", location: "Server Room", battery: 100 },
        { id: "iot-03", name: "ESP32 MCU", type: "Sensor", status: "online", location: "Garden", battery: 85 },
    ])

    const [smartLight, setSmartLight] = useState(false)
    const [fanSpeed, setFanSpeed] = useState(0)
    const [temperature, setTemperature] = useState(24)
    const [humidity, setHumidity] = useState(45)

    // Live data simulation (Unified)
    useEffect(() => {
        if (!isSimulationRunning) return

        const interval = setInterval(() => {
            // Cloud Mocks
            setActiveUsers(prev => Math.max(0, prev + Math.floor(Math.random() * 20) - 10))
            setCpuLoad(prev => Math.min(100, Math.max(5, prev + Math.floor(Math.random() * 10) - 5)))
            setMemoryUsage(prev => Math.min(100, Math.max(20, prev + Math.floor(Math.random() * 6) - 3)))
            setRequestsPerSec(prev => Math.max(0, prev + Math.floor(Math.random() * 50) - 25))

            // IoT Mocks
            setTemperature(prev => parseFloat((prev + (Math.random() * 0.4 - 0.2)).toFixed(1)))
            setHumidity(prev => Math.min(100, Math.max(0, prev + Math.floor(Math.random() * 3) - 1)))

            // Randomly fluctuate fan speed if on
            if (fanSpeed > 0) {
                setFanSpeed(prev => Math.min(100, Math.max(10, prev + Math.floor(Math.random() * 4) - 2)))
            }
        }, 2000)

        return () => clearInterval(interval)
    }, [isSimulationRunning, fanSpeed])

    // --- HANDLERS ---
    const handleDeploy = () => {
        if (isDeploying) return
        setIsDeploying(true)
        setDeploymentProgress(0)

        const interval = setInterval(() => {
            setDeploymentProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setIsDeploying(false)
                    const id = Math.floor(Math.random() * 1000)
                    setInstances(prevUsers => [
                        ...prevUsers,
                        { id: `srv-${id}`, name: `Worker-${id}`, status: "running", region: "us-west-2", ip: `10.0.3.${id}` }
                    ])
                    return 100
                }
                return prev + 10
            })
        }, 500)
    }

    const toggleInstance = (id: string) => {
        setInstances(prev => prev.map(inst => {
            if (inst.id === id) return { ...inst, status: inst.status === "running" ? "stopped" : "running" }
            return inst
        }))
    }

    return (
        <div className="flex flex-col min-h-screen bg-muted/20">
            <section className="bg-background border-b py-8">
                <div className="container px-4 mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">Interactive Showcase</h1>
                    <p className="text-muted-foreground mt-2">
                        Experience our full-stack capabilities: From Cloud Infrastructure to IoT Edge Devices.
                    </p>
                </div>
            </section>

            <div className="container px-4 py-8 mx-auto">
                <Tabs defaultValue="cloud" className="space-y-6">
                    <div className="flex items-center justify-between">
                        <TabsList className="grid w-full grid-cols-3 max-w-[600px]">
                            <TabsTrigger value="cloud">Cloud Dashboard</TabsTrigger>
                            <TabsTrigger value="iot">IoT Device Manager</TabsTrigger>
                            <TabsTrigger value="creative" className="gap-2">
                                <Palette className="h-4 w-4" />
                                Creative UI
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-2">
                            <div className="bg-background border rounded-lg px-3 py-1 flex items-center gap-2 text-sm shadow-sm">
                                <div className={`w-2 h-2 rounded-full ${isSimulationRunning ? 'animate-pulse bg-green-500' : 'bg-red-500'}`} />
                                {isSimulationRunning ? 'System Live' : 'System Paused'}
                            </div>
                            <Switch checked={isSimulationRunning} onCheckedChange={setIsSimulationRunning} />
                        </div>
                    </div>

                    {/* === CLOUD TAB === */}
                    <TabsContent value="cloud" className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Revenue (Demo)</CardTitle>
                                    <span className="text-xs text-muted-foreground">Monthly</span>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$45,231.89</div>
                                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                                    <Activity className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{activeUsers.toLocaleString()}</div>
                                    <p className="text-xs text-muted-foreground">Live real-time updates</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Requests/sec</CardTitle>
                                    <Zap className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{requestsPerSec}</div>
                                    <Progress value={(requestsPerSec / 2000) * 100} className="mt-2" />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">System Health</CardTitle>
                                    <ShieldCheck className="h-4 w-4 text-green-500" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-green-600">Optimal</div>
                                    <p className="text-xs text-muted-foreground">All systems operational</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="md:col-span-2">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <CardTitle>Instance Management</CardTitle>
                                            <CardDescription>Manage your cloud servers directly.</CardDescription>
                                        </div>
                                        <Button onClick={handleDeploy} disabled={isDeploying}>
                                            {isDeploying ? "Deploying..." : "Deploy New Instance"}
                                        </Button>
                                    </div>
                                    {isDeploying && <Progress value={deploymentProgress} className="mt-4" />}
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {instances.map((instance) => (
                                            <div key={instance.id} className="flex items-center justify-between mb-4 pb-4 border-b last:border-0 last:pb-0">
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2 rounded-full ${instance.status === 'running' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                                        <Server className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{instance.name}</p>
                                                        <p className="text-xs text-muted-foreground">{instance.ip} • {instance.region}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Badge variant={instance.status === 'running' ? 'success' : 'destructive'}>
                                                        {instance.status}
                                                    </Badge>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => toggleInstance(instance.id)}
                                                    >
                                                        {instance.status === 'running' ? <Square className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Resource Usage</CardTitle>
                                    <CardDescription>Real-time server metrics</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium">CPU Usage</span>
                                            <span className="text-muted-foreground">{cpuLoad}%</span>
                                        </div>
                                        <Progress value={cpuLoad} className={cpuLoad > 80 ? "bg-red-200 [&>div]:bg-red-500" : ""} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium">Memory Usage</span>
                                            <span className="text-muted-foreground">{memoryUsage}%</span>
                                        </div>
                                        <Progress value={memoryUsage} />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* === IOT TAB === */}
                    <TabsContent value="iot" className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Mock Live Camera Feed */}
                            <Card className="md:col-span-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                        Raspberry Pi Stream
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                                            <p className="text-green-500 font-mono text-xs mb-1">BITRATE: 4502 KBPS | FPS: 30</p>
                                            <p className="text-white font-mono text-sm">CAM-01 [RPI-4-GW]</p>
                                        </div>
                                        <Video className="h-16 w-16 text-muted-foreground/30" />
                                        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded border border-white/20">
                                            LIVE
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Sensor Readings */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Environment</CardTitle>
                                    <CardDescription>ESP32 Sensor Array</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                                                <Thermometer className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">Temperature</p>
                                                <p className="text-2xl font-bold">{temperature}°C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                                <Wifi className="h-5 w-5" /> {/* Using Wifi as icon for humidity/air */}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">Humidity</p>
                                                <p className="text-2xl font-bold">{humidity}%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Lightbulb className={`h-4 w-4 ${smartLight ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} />
                                                <span>Smart Light</span>
                                            </div>
                                            <Switch checked={smartLight} onCheckedChange={setSmartLight} />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Fan className={`h-4 w-4 ${fanSpeed > 0 ? 'animate-spin' : ''}`} />
                                                    <span>Fan Speed</span>
                                                </div>
                                                <span className="text-muted-foreground">{fanSpeed}%</span>
                                            </div>
                                            <Progress value={fanSpeed} className="h-2" />
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={() => setFanSpeed(0)}>Off</Button>
                                                <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={() => setFanSpeed(50)}>50%</Button>
                                                <Button size="sm" variant="outline" className="flex-1 text-xs" onClick={() => setFanSpeed(100)}>Max</Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Connected Devices List */}
                            <Card className="md:col-span-3">
                                <CardHeader>
                                    <CardTitle>Connected Edge Devices</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        {iotDevices.map(device => (
                                            <div key={device.id} className="flex items-center gap-4 p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors">
                                                <div className="p-3 bg-secondary rounded-full">
                                                    <Cpu className="h-6 w-6 text-foreground" />
                                                </div>
                                                <div className="flex-1 overflow-hidden">
                                                    <h4 className="font-semibold truncate">{device.name}</h4>
                                                    <p className="text-xs text-muted-foreground">{device.location} • {device.type}</p>
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-200">
                                                        {device.status}
                                                    </Badge>
                                                    <span className="text-[10px] text-muted-foreground">Bat: {device.battery}%</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* === CREATIVE UI TAB === */}
                    <TabsContent value="creative" className="space-y-6">
                        <div className="p-6 border rounded-xl bg-card shadow-sm">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold tracking-tight">Interactive UI Components</h2>
                                <p className="text-muted-foreground">
                                    A collection of high-fidelity, interactive, and purely CSS/React-driven components demonstrating modern frontend capabilities.
                                </p>
                            </div>
                            <CreativeGallery />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
