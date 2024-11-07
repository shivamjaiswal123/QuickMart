import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
    return (
      <div class="flex">
        <div class="m-auto w-1/4 rounded-xl bg-white p-6 flex flex-col">
          <h1 class="text-3xl mb-8 font-semibold">Sign up</h1>

          <div>
            <form class="max-w-xs">
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900"
                >
                    Name
                </label>

                <input
                  type="text"
                  id="name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="john doe"
                  required
                />
              </div>

              <div class="mb-5">
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  placeholder="john.doe@gmail.com"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900"
              >
                Submit
              </button>

            <div>
                <p className="text-sm text-center mt-2">Already have an account <Link to='/signin' className="text-blue-500 underline">Signin</Link></p>
            </div>

            </form>
          </div>
        </div>
      </div>
    );
}

export default Signup
