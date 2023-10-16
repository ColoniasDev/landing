import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebookSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default async function Members() {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    let { data: members, error } = await supabase
        .from('members')
        .select('*')
        .order('id')

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h2 className="font-bold py-6 text-5xl leading-5">Miembros de Colonias DEV</h2>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
                {members?.map((member) => (
                    <li key={member.id}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
                        <div className="flex flex-1 flex-col p-8">
                            <h3 className="text-sm font-medium text-gray-900">{member.first_name} {member.last_name}</h3>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1">
                                    <a href="#" id="" className="relative -mr-px block text-center w-0 flex-1 items-center py-2">
                                        <FontAwesomeIcon icon={faXTwitter} />
                                    </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                    <a href="#" className="relative -mr-px block text-center w-0 flex-1 items-center py-2">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                    <a href="#" className="relative -mr-px block text-center w-0 flex-1 items-center py-2">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
