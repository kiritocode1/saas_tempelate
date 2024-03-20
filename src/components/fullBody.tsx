
import Image from "next/image"
import Link from "next/link"
import placeholder from "@/bulk/placeholder.jpg"
export function FullBody() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid gap-10 lg:gap-16 items-center space-y-10 lg:space-y-0 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">Trusted by teams all around the world.</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                nec.
              </p>
              <Link className="text-base font-semibold underline" href="#">
                Learn more
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Hero image"
                className="w-full rounded-xl object-cover aspect-[4/3] overflow-hidden"
                height="400"
                src={placeholder.src}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid gap-10 lg:gap-16 items-center space-y-10 lg:space-y-0 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Simple and intuitive.</h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                  The platform is designed to be user-friendly, allowing teams to collaborate without the need for
                  extensive training.
                </p>
              </div>
              <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-2">
                <div className="flex items-start space-y-2">
                  <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Intuitive Interface</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Easily navigate the platform with our user-friendly interface.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-y-2">
                  <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Real-time Collaboration</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Work together seamlessly with real-time collaboration tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-y-2">
                  <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">Task Management</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Organize your workflow with built-in task management features.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-y-2">
                  <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                  <div className="space-y-1">
                    <h3 className="font-semibold">File Sharing</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Share files securely within your team or with clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Features image"
                className="w-full rounded-xl object-cover aspect-[4/3] overflow-hidden"
                height="400"
                src={placeholder.src}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid gap-10 lg:gap-16 items-center space-y-10 lg:space-y-0 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                alt="Features image"
                className="w-full rounded-xl object-cover aspect-[4/3] overflow-hidden"
                height="400"
                src={placeholder.src}
                width="600"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-6 h-6 text-gray-500 dark:text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Starter</h3>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Perfect for small teams getting started.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <h3 className="font-semibold">$9/month</h3>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800" />
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-6 h-6 text-gray-500 dark:text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Team</h3>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Collaboration for growing teams.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <h3 className="font-semibold">$29/month</h3>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800" />
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="w-6 h-6 text-gray-500 dark:text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">Business</h3>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                      Advanced features for enterprise.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <h3 className="font-semibold">$99/month</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid max-w-3xl gap-10 lg:gap-16 mx-auto items-center space-y-10 lg:space-y-16">
            <div className="space-y-2 lg:space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">Elevate your team productivity.</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Our platform provides the tools you need to collaborate effectively and get more done.
              </p>
            </div>
            <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2">
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Intuitive Interface</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Easily navigate the platform with our user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Real-time Collaboration</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Work together seamlessly with real-time collaboration tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Task Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Organize your workflow with built-in task management features.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">File Sharing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Share files securely within your team or with clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2">
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Intuitive Interface</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Easily navigate the platform with our user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Real-time Collaboration</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Work together seamlessly with real-time collaboration tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Task Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Organize your workflow with built-in task management features.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">File Sharing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Share files securely within your team or with clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex items-center justify-center btn btn-primary w-full max-w-xs sm:max-w-none"
                href="#"
              >
                Get started
                <div className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid max-w-3xl gap-10 lg:gap-16 mx-auto items-center space-y-10 lg:space-y-16">
            <div className="space-y-2 lg:space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">Simple pricing, powerful features.</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Choose the plan that works best for your team. All plans include unlimited projects and support.
              </p>
            </div>
            <div className="grid gap-8 sm:gap-12 lg:gap-16">
              <div className="grid gap-2">
                <div className="font-semibold">Starter</div>
                <div className="text-2xl font-bold tracking-tight">$9</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Per user/month</div>
              </div>
              <div className="grid gap-2">
                <div className="font-semibold">Pro</div>
                <div className="text-2xl font-bold tracking-tight">$29</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Per user/month</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <em>Most popular</em>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="font-semibold">Enterprise</div>
                <div className="text-2xl font-bold tracking-tight">$99</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Per user/month</div>
              </div>
            </div>
            <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2">
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Intuitive Interface</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Easily navigate the platform with our user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Real-time Collaboration</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Work together seamlessly with real-time collaboration tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Task Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Organize your workflow with built-in task management features.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-y-2">
                <div className="w-6 h-6 flex-shrink-0 text-gray-400 dark:text-gray-500" />
                <div className="space-y-1">
                  <h3 className="font-semibold">File Sharing</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Share files securely within your team or with clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex items-center justify-center btn btn-primary w-full max-w-xs sm:max-w-none"
                href="#"
              >
                Get started
                <div className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 lg:py-20">
        <div className="container px-4">
          <div className="grid max-w-3xl gap-10 lg:gap-16 mx-auto items-center space-y-10 lg:space-y-16">
            <div className="space-y-2 lg:space-y-3">
              <h2 className="text-3xl font-bold tracking-tight">Trusted by teams all around the world.</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                nec.
              </p>
            </div>
            <div className="grid gap-10 lg:gap-16">
              <div className="grid gap-4 md:gap-8 items-start">
                <div className="w-6 h-6 text-gray-300 opacity-75 dark:text-gray-700 dark:opacity-75" />
                <p className="text-xl font-bold tracking-tight">
                  “The platform has transformed the way our team works. We are more efficient and productive thanks to
                  the tools provided.”
                </p>
              </div>
              <div className="grid gap-4 md:gap-8 items-start">
                <div className="w-6 h-6 text-gray-300 opacity-75 dark:text-gray-700 dark:opacity-75" />
                <p className="text-xl font-bold tracking-tight">
                  “Collaborating with my colleagues has never been easier. The platform is user-friendly and has all the
                  features we need.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
