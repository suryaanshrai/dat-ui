"use client";

import PageBreadcrumb from "@/app/page-breadcrumb";
import { capitalizeFirstLetter } from "@/lib/utils";
import ActorForm from "../create/actor-form";

interface ActorDetailsPageProps {
    params: {
        actorType: string;
        actorId: string;
    };
}
/**
 * @returns Page of an already created actor
 */
function ActorDetailsPage({ params }: ActorDetailsPageProps) {
    const { actorType, actorId } = params;

    return (
        <main>
            <div className="flex justify-between">
                <PageBreadcrumb
                    breadCrumbData={[
                        {
                            pageName: `${capitalizeFirstLetter(actorType)}`,
                            pageUrl: `/actors/${actorType}`,
                        },
                        {
                            pageName: "Edit",
                        },
                    ]}
                />

                <div className="flex flex-row w-full">
                    <div className="w-full">
                        {/* Edit Mode Actor Form */}
                        <ActorForm actorType={actorType} actorId={actorId} editMode={true} />
                    </div>
                </div>
            </div>
        </main>
        // <main className="h-screen flex flex-col">
        //     <div className="flex flex-col flex-grow overflow-hidden">
        //         <PageBreadcrumb
        //             breadCrumbData={[
        //                 {
        //                     pageName: `${capitalizeFirstLetter(actorType)}`,
        //                     pageUrl: `/actors/${actorType}`,
        //                 },
        //                 {
        //                     pageName: "Edit",
        //                 },
        //             ]}
        //         />
        //         <div className="flex flex-row w-full flex-grow overflow-hidden">
        //             <div className="w-full h-full overflow-auto">
        //                 {/* Edit Mode Actor Form */}
        //                 <ActorForm actorType={actorType} actorId={actorId} editMode={true} />
        //             </div>
        //         </div>
        //     </div>
        // </main>
    );
}

export default ActorDetailsPage;
