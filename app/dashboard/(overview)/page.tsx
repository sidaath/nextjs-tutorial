import CardWrapper from "../../ui/dashboard/cards"
import { CardSkeleton } from "@/app/ui/skeletons"
import { fetchCardData } from "../../lib/data"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons"
import { lusitana } from "../../ui/fonts"
import { Suspense } from "react"
import { RevenueChartSkeleton } from "@/app/ui/skeletons"




export default async function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    // const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices} = await fetchCardData();

    const [ {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices}] = await Promise.all([
        fetchCardData(),
    ])
    
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}